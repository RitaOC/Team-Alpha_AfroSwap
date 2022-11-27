const { AlphaRouter } = require('@uniswap/smart-order-router');
const { Token, CurrencyAmount, TradeType, Percent } = require('@uniswap/sdk-core');
const { ethers, BigNumber } = require('ethers');
const JSBI = require('jsbi');
const ERC20ABI = require('./abi.json');

const V3_SWAP_ROUTER_ADDRESS = '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45';
const INFURA_URL_TESTNET = process.env.REACT_APP_INFURA_URL_TESTNET;

const chainId = 1;
const web3Provider = new ethers.providers.JsonRpcProvider(INFURA_URL_TESTNET);
const router = new AlphaRouter({ chainId: chainId, provider: web3Provider });

const name0 = 'Wrapped Ether';
const symbol0 = 'WETH';
const decimals0 = 18;
const address0 = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';

const name1 = 'USD//C';
const symbol1 = 'USDC';
const decimals1 = 6;
const address1 = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';

const WETH = new Token(chainId, address0, decimals0, symbol0, name0);
const USDC = new Token(chainId, address1, decimals1, symbol1, name1);

export const getWethContract = () => new ethers.Contract(address0, ERC20ABI, web3Provider);
export const getUsdcContract = () => new ethers.Contract(address1, ERC20ABI, web3Provider);

export const getPrice = async (inputAmount, slippageAmount, deadline, walletAddress) => {
  const percentSlippage = new Percent(slippageAmount, 100);
  const wei = ethers.utils.parseUnits(inputAmount.toString(), decimals0);
  const currencyAmount = CurrencyAmount.fromRawAmount(WETH, JSBI.BigInt(wei));

  const route = await router.route(
    currencyAmount,
    USDC,
    TradeType.EXACT_INPUT,
    {
      recipient: walletAddress,
      slippageTolerance: percentSlippage,
      deadline: deadline,
    }
  );

  console.log(`Quote Exact In: ${route.quote.toFixed(2)}`);
  console.log(`Gas Adjusted Quote In: ${route.quoteGasAdjusted.toFixed(2)}`);
  console.log(`Gas Used USD: ${route.estimatedGasUsedUSD.toFixed(6)}`);


  const transaction = {
    data: route.methodParameters.calldata,
    to: V3_SWAP_ROUTER_ADDRESS,
    value: BigNumber.from(route.methodParameters.value),
    from: walletAddress,
    gasPrice: BigNumber.from(route.gasPriceWei),
    gasLimit: ethers.utils.hexlify(1000000)
  };

  const quoteAmountOut = route.quote.toFixed(6);
  const ratio = (inputAmount / quoteAmountOut).toFixed(3);

  return (
    transaction,
    quoteAmountOut,
    ratio
  )
}

export const runSwap = async (transaction, signer) => {
  const approvalAmount = ethers.utils.parseUnits('10', 18).toString();
  const contract0 = getWethContract();
  await contract0.connect(signer).approve(
    V3_SWAP_ROUTER_ADDRESS,
    approvalAmount
  );

  signer.sendTransaction(transaction);
}
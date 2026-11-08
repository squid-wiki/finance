# returns

年化收益计算，TypeScript 纯函数。

- 一次性投入：**CAGR**
- 定投：**XIRR**（每笔资金投入时间不同，不能用 CAGR）
- 支持分红再投入、交易费用、汇率换算（USD → CNY / SGD）

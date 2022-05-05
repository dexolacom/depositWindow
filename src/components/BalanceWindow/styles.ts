import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #1F3350;
  width: 500px;
  border-radius: 20px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.2em 1em 1.2em 1em;
  gap: 25px;
`

export const Title = styled.span`
  color: #FFFFFF;
  font-weight: bold;
`

export const BalanceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Balance = styled.span`
  flex: 1;
  font-size: 38px;
  color: #60CA5D;
  font-weight: bold;
`

export const BalanceCurrency = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #fff;
  font-weight: bold;
`

export const CurrencyNumber = styled.span`
  text-align: right;
  color: #fff;
  font-size: 18px;
`

export const Currency = styled.span`
  color: #2E63C1;
  font-size: 18px;
  margin-left: 25px;
`

export const Button = styled.button`
  color: #fff;
  background-color: #2251F5;
  border-radius: 10px;
  border: none;
  padding: 18px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`


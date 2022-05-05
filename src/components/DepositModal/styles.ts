import styled from 'styled-components';
// @ts-ignore
import { ReactComponent as Close } from '../../icons/close.svg';

export const Backdrop = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,0.5);
`

export const Wrapper = styled.div`
  background-color: #16243B;
  width: 500px;
  border-radius: 10px;
  transition: all 0.3s ease-out;
  box-sizing: border-box;
  position: relative;
`

export const CloseIcon = styled(Close)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.3em 1em 1.3em 1em;
  gap: 25px;
  color: #A2ABBE;
  
  svg {
    cursor: pointer;
  }
`

export const Title = styled.span`
  color: #fff;
  font-size: 38px;
`

export const Text = styled.span`
  color: #A2ABBE;
  font-size: 12px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #364158;
  border-radius: 10px;
  padding: 12px;
  margin: 5px 0 5px 0;
`

export const Input = styled.input`
  background: transparent;
  color: #fff;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 22px;
  flex: 1;
`

export const CurrencyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-left: 1px solid #A2ABBE;
  margin-left: 13px;
  
  span {
    font-size: 14px;
    font-weight: bold;
    margin-left: 5px;
  }
  
  svg {
    margin-left: 5px;
  }
`

export const CommissionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 22px;
  font-weight: bold;
`

export const Button = styled.button<{background: string}>`
  color: ${({color}) => color ? color : '#fff'};
  background-color: ${({background}) => background ?? background};
  border-radius: 10px;
  border: none;
  padding: 10px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`

export const Address = styled.span`
  color: #60CA5D;
  font-size: 14px;
  font-weight: bold;
`

export const WarningTip = styled.div`
  border: 1px solid #C9A956;
  padding: 0 1em 0 1em;
  border-radius: 10px;
  font-size: 14px;
  color: #C9A956;
  font-weight: bold;
`
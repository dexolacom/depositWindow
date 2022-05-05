import {
  Wrapper,
  Content,
  Title,
  BalanceContainer,
  Balance,
  BalanceCurrency,
  Currency,
  CurrencyNumber,
  Button
} from './styles';

const BalanceWindow = ({setIsModalOpen}: {setIsModalOpen: (b: boolean) => void }) => {
  return (
    <Wrapper>
      <Content>
        <Title>Your BUSD balance</Title>
        <BalanceContainer>
          <Balance>5000</Balance>
          <BalanceCurrency>
            <CurrencyNumber>0</CurrencyNumber>
            <Currency>
              BUSD
            </Currency>
          </BalanceCurrency>
        </BalanceContainer>
        <Button onClick={() => setIsModalOpen(true)}>Cashier</Button>
      </Content>
    </Wrapper>
  );
};

export default BalanceWindow;
import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import {
  Backdrop,
  Content,
  InputContainer,
  Title,
  Wrapper,
  Container,
  Text,
  Input,
  CurrencyContainer,
  CommissionContainer,
  Button,
  Address,
  WarningTip,
  CloseIcon
} from './styles';
// @ts-ignore
import { ReactComponent as BusdLogo} from '../../icons/busd-logo.svg';
// @ts-ignore
import { ReactComponent as CopyIcon } from '../../icons/copy.svg';
import {copyToClipBoard} from '../../helpers/copyToClipBoard';
import {useClickOutside} from '../../helpers/useClickOutside';

const DepositModal = ({setIsModalOpen}: {setIsModalOpen: (b: boolean) => void }) => {
  const [modalType, setModalType] = useState<string>('inputModal')
  const [merchantPublicAddress, setMerchantPublicAddress] = useState<string>('')
  const wrapperRef = useRef(null);
  const copyTextRef = useRef(null)
  useClickOutside(wrapperRef, setIsModalOpen)


  const getMerchantPublicAddress = async () => {
    const endpoint = 'https://custodian-backend-public.herokuapp.com'

    // await axios.post(`${endpoint}/api/v1/auth/login`, {"email": "vuydojeyda@vusra.com",
    //   "password": 12345})
    //   .then(res => console.log(res))

    await axios.get(`${endpoint}/api/v1/merchants`)
      .then(res => setMerchantPublicAddress(res?.data[0]?.publicAddress))
  };

  useEffect(() => {
    getMerchantPublicAddress()
  }, []);

  return (
    <Backdrop>
      <Wrapper ref={wrapperRef}>
        <CloseIcon heigth={20} width={20} color={'#A2ABBE'} onClick={() => setIsModalOpen(false)}/>
        <Content>
          {/*<ArrowLeftIcon heigth={30} width={30}/>*/}
          <Title>Deposit</Title>
          {(() => {
            if (modalType === 'inputModal') {
              return (
                <>
                  <Container>
                    <Text>*Your deposit will not be credited if you enter an incorrect network</Text>
                    <InputContainer>
                      <Input/>
                      <CurrencyContainer>
                        <BusdLogo height={20} width={20}/>
                        <span>BUSD</span>
                      </CurrencyContainer>
                    </InputContainer>
                    <Text>Min 1000 BUSD | Max 1000000 BUSD</Text>
                  </Container>
                  <CommissionContainer>
                    <Text>Commission amount: </Text>
                    0
                  </CommissionContainer>
                  <Button background={'#2251F5'} onClick={() => setModalType('successModal')}>Submit</Button>
                  <Button background={'transparent'} color={'#A2ABBE'} onClick={() => setIsModalOpen(false)}>Cancel</Button>
                </>
              )
            }
            if (modalType === 'successModal') {
              return (
                <>
                  <InputContainer>
                    <Address ref={copyTextRef}>{merchantPublicAddress}</Address>
                    <CopyIcon onClick={() => copyToClipBoard(copyTextRef)} heigth={15} width={15} color={'#60CA5D'}/>
                  </InputContainer>
                  <WarningTip>
                    <p>
                      IMPORTANT: if you make a deposit in an amount less than the minimum,
                      funds will not be credited to your account
                    </p>
                  </WarningTip>
                  <Button background={'transparent'} color={'#A2ABBE'} onClick={() => setModalType('inputModal')}>Back</Button>
                </>
              )
            }
          })()}
        </Content>
      </Wrapper>
    </Backdrop>

  );
};

export default DepositModal;
import React from 'react';
import styled from 'styled-components';

import HeaderContainer from '../../../containers/HeaderContainer';
import PageTemplate from '../../templates/PageTemplate';
import InformationMain from '../../organisms/InformationMain';

const Container = styled.div`
    display: block;
    margin: 0 auto;
    max-width: 1000px !important;
`;

const WordBookPage = () => {
    return (
        <PageTemplate
            header={
                <HeaderContainer />
            }
        >
            <Container>
                <InformationMain
                    title="나만의 단어장"
                    explanation="회원님의 단어장을 보여줍니다"
                    buttonText="단어장 추가"
                />
            </Container>
        </PageTemplate>
    );
}

export default WordBookPage;
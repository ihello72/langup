import React from 'react';

import PageTemplate from '../../templates/PageTemplate';

import HeaderOrganisms from '../../organisms/Header';
import CardMainOrganisms from '../../organisms/CardMain';

import Jumbotron from '../../molecules/Jumbotron';

const HomePage = () => {
    return (
        <PageTemplate 
            header={ <HeaderOrganisms/> }
        >
            <CardMainOrganisms />
            <Jumbotron 
                subText="사용자들이 만들어가는"
                mainText="랭업 오픈사전"
                buttonText="만들러 가기"
                imagePath = "https://cdn-images-1.medium.com/max/2000/1*TckFXfkU_bg0aADPYR_t7Q.png"
            />
        </PageTemplate>
    );
}

export default HomePage;
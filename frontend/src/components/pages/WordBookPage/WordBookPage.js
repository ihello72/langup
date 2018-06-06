import React from 'react';

import HeaderContainer from '../../../containers/HeaderContainer';
import PageTemplate from '../../templates/PageTemplate';

import IntroduceMain from '../../organisms/IntroduceMain';

const WordBookPage = () => {
    return (
        <PageTemplate
            header={
                <HeaderContainer />
            }
        >
            <IntroduceMain />
        </PageTemplate>
    );
}

export default WordBookPage;
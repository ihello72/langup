import React from 'react';
import styled from 'styled-components';
import WordBlock from '../../molecules/WordBlock';

const Container = styled.div`
    width: 100%;
`;

const WordMain = ({ words }) => {
    const wordList = words.reverse().map(userWord => {
        return <WordBlock userWord={userWord} />
    });

    return (
        <Container>
            {wordList}
        </Container>
    );
};

export default WordMain;
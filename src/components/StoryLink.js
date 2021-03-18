import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
    a:hover {
        color: var(--green-bright);
    }
    a {
        margin-right: 1rem;
    }
`;

const StoryLink = ({url, title, publisher}) => (
    <StyledLi>
        <b>
            <a href={url}>
                {title}
            </a>
        </b>
         / {publisher}
    </StyledLi>
);

export default StoryLink;
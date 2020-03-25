import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
    padding: 30px;
    background: #FFF;
    border-radius: 4px;

    footer {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            background: #7159c1;
            color: #FFF;
            border: 0;
            border-radius: 4px;
            padding: 12px 20px;
            font-weight: bold;
            text-transform: uppercase;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03 , '#7159c1')};
            }
        }
    }
`;

export const ProductTable = styled.table`
    width: 100%;

    thead th {
        color: #999;
        text-align: left;
        padding: 5px;

    }

    tbody {
        padding: 12px;
        border-bottom: 1px solid #eee;        
    }

    img {
        height: #333;
        display: block;
        max-width: 100px;
    }

    span {
        display: block
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
    }

    button {
            display: flex;
            align-items: center;
            padding: 8px; 
            border: 0;
            background: white;
            
            svg {
                margin-right: 5px;
            }
    }


`;

export const Total = styled.div`
    display: felx;
    align-items: baseline;

    span {
        color: #999;
        font-wight: bold;
    }

    strong {
        font-size: 28px;
        margin-left: 5px;
    }
`;
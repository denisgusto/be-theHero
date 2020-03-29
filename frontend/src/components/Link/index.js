import styled from 'styled-components';
import { Link as Rlink } from 'react-router-dom';

const Link = styled(Rlink)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #41414d;
  font-size: 18px;
  font-weight: 700;
  transition: opacity 0.2s;

  svg {
    margin-right: 8px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export default Link;

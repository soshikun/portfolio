import styled from 'styled-components';
import { Menu } from 'antd';

export const NavigationMenu = styled(Menu)`
    justify-content: center;

    .ant-menu-item {
        padding-left: 32px;
        padding-right: 32px;
    }

    .anticon svg {
        height: 15px;
    }

    .anticon + span {
        display: none;
    }

    li:has(.anticon) {
        padding-left: 24px;
        padding-right: 24px;
    }
`;
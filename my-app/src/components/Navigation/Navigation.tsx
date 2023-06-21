import React, { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { NavigationMenu } from './styles.ts';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      children,
      label,
      type,
    } as MenuItem;
  }
  
const items: MenuProps['items'] = [
    {
        label: 'Home',
        key: 'home',
    },
    {
        label: 'Projects',
        key: 'projects',
    },
    getItem('About', 'about', [
        getItem('Education', 'education'),
        getItem('Work Experience', 'workExperience'),
        getItem('Fun Facts', 'funFacts'),
    ]),
    {
        label: 'Contact',
        key: 'contact',
    },
    {
        label: '',
        key: 'github',
        icon: <GithubOutlined />,
    },
    {
        label: '',
        key: 'linkedin',
        icon: <LinkedinOutlined />,
    }
];

const Navigation = () => {
    const [current, setCurrent] = useState('home');
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, []);

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        if (e.key !== 'home' && e.key !== 'github' && e.key !== 'linkedin') {
            navigate(`/${e.key}`);
        } else if (e.key === 'home') {
            navigate('/');
        } else {
            if (e.key === 'github') {
                window.location.replace('https://github.com/soshikun');
            } else if (e.key === 'linkedin') {
                window.location.replace('https://www.linkedin.com/in/stephanie-nguyen-4910411aa/');
            }
        }
    };

    return <NavigationMenu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} />;
}

export default Navigation;
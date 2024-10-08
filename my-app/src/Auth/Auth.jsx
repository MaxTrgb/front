import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Registration from './Registration';
import Login from './Login';
import './Form.module.css';

const Auth = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(true);

    const showModal = () => {
        setIsModalOpen(true);
    };



    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
    }
    return (
        <>
            <Button
                calssName="authBtn"
                type="primary"
                shape="circle"
                onClick={showModal}
                icon={<UserOutlined />} 
                style={{backgroundColor: '#222831'}}/>

            <Modal                
                open={isModalOpen}                
                footer={null}
                onCancel={() => setIsModalOpen(false)}
            >
                {isLoginForm ? <Login toggleForm={toggleForm} /> : <Registration toggleForm={toggleForm} />}
            </Modal>
        </>
    )
}

export default Auth;
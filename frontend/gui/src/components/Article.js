import React from 'react';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import Item from 'antd/lib/list/Item';


const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);


const Articles = (props) => {
    return( 
          // <List
          //   itemLayout="vertical"
          //   size="large"
          //   pagination={{
          //     onChange: page => {
          //       console.log(page);
          //     },
          //     pageSize: 3,
          //   }}
          //   dataSource={props.data}
          //   renderItem={item => (
          //     <List.Item
          //       key={item.title}
          //       actions={[
          //         <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          //         <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          //         <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
          //       ]}
          //       extra={
          //         <img
          //           width={272}
          //           alt="logo"
          //           src={item.img1}
          //         />
          //       }
          //     >
          //       <List.Item.Meta
          //         title={<a href={`/${item.id}`}>{item.title}</a>}
          //         description={item.body}
          //       />
          //       {/* {item.body2} */}
          //     </List.Item>
          //   )}
          // />
    <div>
      {/* LOOP START */}
      {props.data.map(item => (
        <div>
          {/* <p>{item.id}</p> */}
          <li key={item.id}>
          <p><a href={`/${item.id}`}>{item.title}</a></p>
          <p>{item.body}</p>
          <p><img width='272' src={item.thumb}/></p>
          </li>
        </div>
      ))}   
      {/* LOOP END */}
    </div>
    )
}

export default Articles;
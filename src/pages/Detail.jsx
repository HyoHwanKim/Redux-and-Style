import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailPage = styled.div`
    border: 2px solid rgb(238, 238, 238);
    width: 100%;
    height: 100vh;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
`


const DetailCard = styled.div`
    width: 600px;
    height: 400px;
    border: 1px solid rgb(238, 238, 238);
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    /* justify-content: space-between; */
`;

const DetailCardTop = styled.div`
    display: flex;
    height: 80px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 24px;
    -webkit-box-align: center;
    align-items: center;
`

const GoBackBtn = styled.button`
    border: 1px solid rgb(221, 221, 221);
    height: 40px;
    width: 120px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    cursor: pointer;
`

const DetailCardBody = styled.div`
    display: block;
    margin: 30px;
`

function Detail() {
  const todoList = useSelector((state) => state.todoList);
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()


  console.log(dispatch)

  const detailData = todoList.find((item)=>{
      console.log('item : ', item.id)
      console.log('params : ', params.id)
    return item.id == params.id
  })

  console.log(detailData)

  return (
    <DetailPage>
      <DetailCard>
        <DetailCardTop>
        <p>id: {params.id}</p>
        <GoBackBtn onClick={()=>{
            navigate('/')
        }}>이전으로</GoBackBtn>
        </DetailCardTop>

        <DetailCardBody>
        <h1>{detailData.title}</h1>
        <span>{detailData.content}</span>
        </DetailCardBody>

      </DetailCard>
    </DetailPage>
  );
}

export default Detail;

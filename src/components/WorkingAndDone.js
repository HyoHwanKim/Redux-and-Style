import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const WorkingAndDoneArea = styled.div`
  max-width: 1200px;
  min-width: 800px;
`;

const WorkingArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DoneArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TodoCardWrapper = styled.div`
  height: 200px;
  width: 275px;
  border: 3px solid rgb(1, 128, 128);
  border-radius: 15px;
  padding: 0 20px 0 20px;
  margin: 0 0 0 10px;
`;

const commonFontStyle = `font-size: 25px;
font-weight: bolder;`;

const TodoCardTitle = styled.p`
  ${commonFontStyle}
`;
const WorkingText = styled.p`
  ${commonFontStyle}
`;

const TodoCardContent = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

const ButtonPair = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DeleteButton = styled.button`
  height: 45px;
  width: 130px;
  margin: 5px;
  border: 2px solid red;
  border-radius: 8px;
  background-color: transparent;
`;

const CompleteButton = styled.button`
  height: 45px;
  width: 130px;
  margin: 5px;
  border: 2px solid green;
  border-radius: 8px;
  background-color: transparent;
`;

function WorkingAndDone() {
  const list = useSelector((state) => {
    return state.todoList;
  });
  console.log(list);
  return (
    <WorkingAndDoneArea>
      <Working list={list}></Working>
      <Done list={list}></Done>
    </WorkingAndDoneArea>
  );
}

function Working({ list }) {
  return (
    <div>
      <WorkingText>Working..🔥</WorkingText>
      <WorkingArea>
        {list
          .filter((item) => item.isDone === false)
          .map((item) => {
            return (
              <TodoCard
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                isDone={item.isDone}
                detail={item.detail}
                list={list}
              ></TodoCard>
            );
          })}
      </WorkingArea>
    </div>
  );
}

function Done({ list }) {
  return (
    <>
      <TodoCardTitle>Done...!🎉</TodoCardTitle>
      <DoneArea>
        {list
          .filter((item) => item.isDone === true)
          .map((item) => {
            return (
              <TodoCard
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                isDone={item.isDone}
                detail={item.detail}
                list={list}
              ></TodoCard>
            );
          })}
      </DoneArea>
    </>
  );
}

function TodoCard({ id, title, content, isDone, list, detail }) {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch({ type: "DELETE", payload: id });
  };
  const completeHandler = () => {
    dispatch({ type: "DONE_CHANGE", payload: id });
  };
  return (
    <TodoCardWrapper>
      <Link to={`/detail/${id}`}>{detail}</Link>
      {/* <div>{detail}</div> */}
      <TodoCardTitle>{title}</TodoCardTitle>
      <TodoCardContent>{content}</TodoCardContent>
      <ButtonPair>
        <DeleteButton onClick={() => deleteHandler()}>삭제하기</DeleteButton>
        <CompleteButton onClick={() => completeHandler()}>
          {!isDone ? "완료하기" : "취소"}
        </CompleteButton>
      </ButtonPair>
    </TodoCardWrapper>
  );
}

export default WorkingAndDone;

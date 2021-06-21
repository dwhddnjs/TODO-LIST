import React from "react";
import styled from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const CheckCircle = styled.div``;
const Text = styled.div``;
const TodoItemBlock = styled.div`
  &:hover {
    $(Remove) {
      opacity: 1;
    }
  }
`;

export default function TodoItem() {
  return <div></div>;
}

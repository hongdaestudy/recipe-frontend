import React from 'react';
import styled from 'styled-components';

interface IProps {
  page: number;
  limit?: number;
  total?: number;
  setPage: (page: number) => void;
}

const MAX_PAGE_COUNT = 10; // MAX_PAGE_COUNT -> 한번에 보여지는 페이지 수,

export const Pagination = ({
  page, // 현재 페이지
  limit = 10, // 페이지당 보여줄 아이템 수
  total = 0, //쿼리 결과의 총 아이템 개수
  setPage,
}: IProps) => {
  // 총 페이지 수 계산
  const numberOfPages = total ? Math.ceil(total / limit) : 1;

  if (page > numberOfPages) {
    setPage(1);
  }

  function getPaginationArray() {
    const result: number[] = [];

    // 출력할 첫 숫자의 인덱스 (0부터 시작)
    let i = Math.trunc((page - 1) / MAX_PAGE_COUNT) * MAX_PAGE_COUNT;
    //마지막 블록일 경우 마지막 번호까지만 짧게 출력
    if (
      Math.trunc((page - 1) / MAX_PAGE_COUNT) ===
      Math.trunc(numberOfPages / MAX_PAGE_COUNT)
    ) {
      while (i < numberOfPages) {
        result.push(++i);
      }
    } else {
      //마지막 블록이 아닐 경우 전부 다 출력
      const j = i + MAX_PAGE_COUNT;
      while (i < j) {
        result.push(++i);
      }
    }
    return result;
  }
  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {getPaginationArray().map(value => (
          <Button
            key={value}
            onClick={() => setPage(value)}
            data-current={page === value ? 'page' : null}
          >
            {value}
          </Button>
        ))}
        <Button onClick={() => setPage(page)} disabled={page === numberOfPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
};
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: white;
  color: black;
  font-size: 1rem;

  &:hover {
    background: #44b6b5;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[data-current] {
    background: #46ae4f;
    color: white;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

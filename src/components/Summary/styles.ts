import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7.5rem;

  div {
    background-color: var(--main-shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      color: var(--title);

      &.withdraw {
        color: var(--red-color);
      }
    }

    &.hightlight-bg {
      background: var(--green-color);
      color: var(--main-shape);
    }
  }
`;

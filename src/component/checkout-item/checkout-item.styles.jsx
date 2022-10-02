import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const SpanStyles = styled.span`
  width: 23%;
`;

export const Quantity = styled.span`
  display: flex;
`;

export const RemoveBtn = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;
export const Arrow = styled.span`
  .arrow {
    cursor: pointer;
  }
`;

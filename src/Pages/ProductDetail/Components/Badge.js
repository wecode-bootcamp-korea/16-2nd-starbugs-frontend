import React from "react";
import styled from "styled-components";

export default function Badge({ feel, taste }) {
  return (
    <BadgeWrapper>
      <FeelInfo feel={feel}>{feel >= 50 ? "강렬함" : "부드러움"}</FeelInfo>
      <TasteInfo taste={taste}>{taste >= 50 ? "달콤함" : "짭짤함"}</TasteInfo>
    </BadgeWrapper>
  );
}

const BadgeWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -40px;
`;

const FeelInfo = styled.p`
  width: 80px;
  background-color: ${(props) => (props.feel >= 50 ? "#D02929" : "#DFAE64")};
  text-align: center;
  padding: 5px 0;
  font-size: 14px;
  border-radius: 10px;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

const TasteInfo = styled(FeelInfo)`
  background-color: ${(props) => (props.taste >= 50 ? "#964B00" : "#00963E")};
  margin: 0 10px;
`;

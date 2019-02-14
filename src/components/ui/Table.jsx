import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {style} from "../../configs/theme";

const TableStyled = styled.table`
  width: ${style("width.max")};
  background: ${(props) => props.theme.color[props.color]};
  border-radius: ${style("radius")};
  box-shadow: ${style("shadow.small")};
  color: ${(props) => props.theme.color[`${props.color}Alt`]};
  font-family: ${style("headerFontFamily")};
  font-size: ${style("fontSize.normal")};
  font-weight: ${style("headerFontWeight")};
  line-height: ${style("fontSize.normal")};
  margin-top: ${style("margin")};
  margin-bottom: ${style("marginHalf")};
  padding: ${style("paddingHalf")};
  text-align: left;
`;

const Table = ({...props}) => (
    <TableStyled {...props}>
        {props.children}
    </TableStyled>
);

Table.propTypes = {
    color: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.shape())
};

Table.defaultProps = {
    color: "primary"
};

const TableHeadStyled = styled.th`
    padding-top: ${style("paddingSmall")};
    padding-bottom: ${style("paddingSmall")};
`;

const TableHead = ({...props}) => (
    <TableHeadStyled {...props}>
        {props.children}
    </TableHeadStyled>
);

TableHead.propTypes = {
    // eslint-disable-next-line
    children: PropTypes.any
};

const TableDataStyled = styled.td`
    padding-top: ${style("paddingSmall")};
    padding-bottom: ${style("paddingSmall")};
`;

const TableData = ({...props}) => (
    <TableDataStyled {...props}>
        {props.children}
    </TableDataStyled>
);

TableData.propTypes = {
    // eslint-disable-next-line
    children: PropTypes.any
};

export {
    Table,
    TableHead,
    TableData
};

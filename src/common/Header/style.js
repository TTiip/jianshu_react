import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  min-width: 1366px;
  max-width: 1440px;
  margin: 0 auto;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  top: 0;
  display: block;
  height: 56px;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  height: 56px;
  width: 960px;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  
  &.left {
    float: left;
  }
  
  &.right {
    float: right;
    color: #969696;
  }
  
  &.active {
    color: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  
  .iconfont.zoom {
    position: absolute;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    right: 5px;
    bottom: 5px;
    text-align: center;
    
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 32px 0 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  
  &::placegolder {
    color: #999
  }
  
  &.focused {
    width: 240px;
  }
  
  &.slide-enter {
    width: 160px;
    transition: all .3s ease-out;
  }
  
  &.slide-enter-active {
    width: 240px;
  }
  
  &.slide-exit {
    width: 240px;
    transition: all .3s ease-out;
  }
  
  &.slide-exit-active {
    width: 160px;
   }
`

export const SearchInfo = styled.div`
	position: absolute;
	left: 0;
	top: 56px;
	width: 280px;
	padding: 0 20px;
	opacity: 0;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);
	background: #fff;
  
  &.fade-enter {
    opacity: 0;
    transition: all .3s ease-out;
  }
  
  &.fade-enter-active {
    opacity: 1;
  }
  
  &.fade-enter-done {
    opacity: 1;
    display: block;
  }
  
  &.fade-exit {
    opacity: 1;
    transition: all .3s ease-out;
  }
  
  &.fade-exit-active {
    opacity: 0;
  }
  
  &.fade-exit-done {
    opacity: 0;
    display: none;
  }
	
	&::before {
	  position: absolute;
    top: -5px;
    left: 40px;
	  content: "";
	  display: block;
    width: 18px;
    height: 18px;
    transform: rotate(45deg);
    background: #fff;
	}
`;

export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 13px;
	cursor: pointer;
	.spin {
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all .3s ease-in;
		transform-origin: center center;
	}
`;

export const SearchInfoList = styled.div`
	overflow: hidden;
`;

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
	&:hover {
	  color: #333;
    border-color: #b4b4b4;
	  cursor: pointer;
	  border: 1px solid #ddd;
	}
`;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`

export const Button = styled.div`
  float: left;
  margin-top: 9px;
  line-height: 38px;
  margin-right: 20px;
  padding: 0 20px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  cursor: pointer;
  
  &.reg {
    color: #ec6149;
  }
  
  &.weitting {
    color: #fff;
    background: #ec6149;
  }
`

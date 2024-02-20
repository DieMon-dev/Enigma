import React from 'react'
import {Text, BackHandler} from 'react-native';
import { styled } from 'nativewind';
import { LinearGradient } from "expo-linear-gradient";
import EnigmaPageLogo from '../logo/EnigmaPage';
import SwipeUpDown from '../locallibs/react-native-swipe-up-down';
import EnigmaTopLogo from '../logo/EnigmaTop';
import UserFindSelect from '../selects/UserFindSelect';
import UserChatsList from '../lists/UserChatsList';
import { observer } from 'mobx-react';

const StyledText = styled(Text)
const StyledLinearGradient = styled(LinearGradient)
interface UserMainPageProps {
    navigation : any
  }
  
interface UserMainPAgeInterface {
    navigation : any,
    isBottom : boolean
}

@observer
export default class UserMainPage extends React.Component<UserMainPageProps, UserMainPAgeInterface> {
  constructor(props: any) {
    super(props);
    this.state = {
      navigation: [],
      isBottom: true
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }


  handleBackButton() {
    return true;
  }
  
  handleLogoChange(place: string){
    if(place === "top"){
      this.setState({isBottom: false})
    }else if(place === "bottom"){
      this.setState({isBottom: true})
    }

  }

  render(){     
    return (
      <StyledLinearGradient className="flex flex-1 w-full h-full items-center justify-center "
      colors={["#1e2024", "#4d5264" ,"#6e7791"]} start={[0.5, 0.01]}>
        {this.state.isBottom ? <EnigmaPageLogo></EnigmaPageLogo> :<StyledText className='relative bottom-[339.5px]'><EnigmaTopLogo></EnigmaTopLogo></StyledText>}
        <SwipeUpDown		
	      itemMini={<UserFindSelect navigation={this.props.navigation}></UserFindSelect>} // Pass props component when collapsed
	      itemFull={<UserChatsList navigation={this.props.navigation}></UserChatsList>} // Pass props component when show full
	      onShowMini={() => this.handleLogoChange("bottom")}
	      onShowFull={() => this.handleLogoChange("top")}
        animation = {"easeInEaseOut"}
        swipeHeight={325}
        iconSize={33}
	      style={{ backgroundColor: '#121414'}} // style for swipe
/>
      </StyledLinearGradient>
    );
  }
}
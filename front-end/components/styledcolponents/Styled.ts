import {Text, View, TextInput} from 'react-native';
import { styled } from 'nativewind';
import { LinearGradient } from "expo-linear-gradient";
class StyledComponents{
    public StyledView = styled(View)
    public StyledText = styled(Text)
    public StyledTextInput = styled(TextInput)
    public StyledLinearGradient = styled(LinearGradient)
}

const StyledComponent = new StyledComponents;
export default StyledComponent;
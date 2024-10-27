import { Text, View, StyleSheet } from "react-native";

interface Props {
  className?: string;
}

const Post: React.FC<Props> = () => {
  return (
    <View>
      <Text>Post</Text>
    </View>
  );
};

export default Post;

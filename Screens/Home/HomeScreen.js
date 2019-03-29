import React from "react";
import { GetArticles } from "../../Services/ArticlesApiService";
import { Image } from "react-native-elements";
import { 
    StyleSheet, 
    Text, 
    View, 
    FlatList 
} from "react-native";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }

    componentDidMount() {
        GetArticles().then(res => {
          this.updateArticlesStateHandler(res);
        });
    }

    updateArticlesStateHandler(articles) {
        this.setState({
          articles: articles
        });
    }

    renderArticles({ item }) {
        const article = item;
        return (
          <View>
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: article.image }}
            />
            <Text>{article.title}</Text>
            <Text>{article.content}</Text>
          </View>
        );
    }

    render() {
        return (
            <View style={Styles.container}>
                <FlatList
                    data={this.state.articles}
                    renderItem={this.renderArticles.bind(this)}
                    keyExtractor={item => item.id.toString()}
                    style={Styles.text}
                />
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },

    text: {
        paddingTop: 40,
        fontSize: 30,
    }
});

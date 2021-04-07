import ApolloClient from 'apollo-boost';
import Vue from 'vue';
import VueApollo from 'vue-apollo';

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
    url: 'http://localhost:8000/graphql'       //End Point
});

export default new VueApollo({
    defaultClient: apolloClient
});
interface Follow {
    uuid: string
    username: string
}

export default {
    Query: {
        async isFollow(_:any, {uuid, username}: Follow, context:any) {
           // const follow = await isFollow (uuid, username);
            //return follow;
        },
    }
}
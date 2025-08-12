class User {
    id: string;
    posts: Post[] = [];
    followers: User[] = [];

    constructor(id: string) {
        this.id = id;
    }

    createPost(content: Post) {
        this.posts.push(content);
    }

    comment(postId: string, commentContent: Comment1) {
        const a = this.findpost(postId);
        if (a) {
            a.addComment(commentContent);
        }
    }

    findpost(postid: string): Post | undefined {
        let post = this.posts.find(e => e.id === postid);
        if (post) return post;
        for (const followedUser of this.followers) {
            post = followedUser.posts.find(p => p.id === postid);
            if (post) return post;
        }
        return undefined;
    }

    follow(user: User) {
        this.followers.push(user);
    }

    likePost(postId: string) {
        const a = this.findpost(postId);
        if (a) {
            a.addlike(this);
        }
    }

    viewFeed(): Post[] {
        let feed: Post[] = [];
        this.followers.forEach(user => {
            feed = feed.concat(user.posts);
        });
        return feed;
    }
}

class Post {
    id: string;
    likes: User[] = [];
    comments: Comment1[] = [];
    userId: string;
    content: string;

    constructor(id: string, userId: string, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
    }

    addlike(users: User) {
        if (!this.likes.includes(users)) {
            this.likes.push(users);
        }
    }

    addComment(comments: Comment1): void {
        this.comments.push(comments);
    }
}

class Comment1 {
    public id: string;
    public userId: string;
    public content: string;
    public replies: string[] = [];

    constructor(id: string, userId: string, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
    }

    addReply(reply: string) {
        this.replies.push(reply);
    }
}
const u1 = new User("1");
const u2 = new User("2");

const p1 = new Post("p1", "1", "Xin chào, đây là bài viết đầu tiên!");
u1.createPost(p1);

u2.follow(u1);

const c1 = new Comment1("c1", "2", "Bài viết hay quá!");
u2.comment("p1", c1);

u1.likePost("p1");

console.log(JSON.stringify(p1, null, 2));
console.log("Feed của u2:", u2.viewFeed());

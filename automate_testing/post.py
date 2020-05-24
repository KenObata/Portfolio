
class Post:
    def __init__(self, title, content):
        self.title = title
        self.content = content

    #test dictionary equivalence
    def json(self):
        return {
            'title':self.title,
            'content':self.content,
        }


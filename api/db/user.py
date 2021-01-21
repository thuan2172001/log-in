class User():
    
    def __init__(self, tuple_):
        '''' tuple_ : (id, name)'''
        self.id, self.name = tuple_

    def get_dict(self):
        dic = {}
        dic['name'] = self.name
        dic['id'] = self.id
        return dic
window.Node2 = function (node) {
    return {
        getSiblings: function () {
            var allChildren = node.parentNode.children
            var array = {
                length: 0
            }
            for (let i = 0; i < allChildren.length; i++) {
                if (allChildren[i] !== node) {
                    array[array.length] = allChildren[i]
                    array.length += 1
                }
            }
            return array
        },
        addClass: function (classes) {
            for (let key in classes) {
                var value = classes[key]
                var methodName = value ? 'add' : 'remove'
                node.classList[methodName](key)
            }
        }
    }
}

var node2 = Node2(item3)
node2.getSiblings()
node2.addClass({
    'a': false,
    'b': true,
    'c': true
})
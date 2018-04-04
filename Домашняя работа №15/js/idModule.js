const Id = (function () {

    const generate = function () {
        const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        let id = '';
        for (let i = 0; i < 15; i++) {
            let position = Math.floor(Math.random() * words.length);
            id += words[position];
        }
        return id;
    };

    return {
        generate
    }

}());
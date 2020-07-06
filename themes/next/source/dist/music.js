const ap = new APlayer({
    container: document.getElementById('aplayer'), //播放器容器元素
    fixed: true, 
    autoplay: true, //自动播放
    preload: 'auto',
    //theme: '#FADFA3', //主题色
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'list', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: false, //列表默认折叠
    listMaxHeight: 50, //列表最大高度
    //lrcType: 3, //歌词传递方式
    audio: [ //音频信息,包含以下
        
        {
            name: 'COSMIC CYCLER - Pure Love', //音频名称
            artist: 'wu_ming', //音频艺术家
            url: '/dist/music/COSMIC CYCLER - Pure Love.mp3', //音频外链
            cover: 'https://p1.music.126.net/LdYemYBR_IiERIfM3uMsEg==/109951163339791625.jpg?param=177y177', //音频封面
            lrc: 'dist/music/COSMIC CYCLER - Pure Love', //音频歌词，配合上面的lrcType使用
        },
        {
            name: 'STAND-ALONE', //音频名称
            artist: 'Aimer', //音频艺术家
            url: '/dist/music/STAND-ALONE.mp3', //音频外链
            cover: 'https://p1.music.126.net/ZzYO1LkLvRZVBoCnfsYAUA==/109951164050936507.jpg?param=177y177', //音频封面
            lrc: 'dist/music/STAND-ALONE.lrc', //音频歌词，配合上面的lrcType使用
        },
        
    ]
});
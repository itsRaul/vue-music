/**
 * playing:播放按钮的状态
 * fullScreen:全屏播放状态
 * playlist:前进或后退播放歌曲，实际就是播放歌曲的列表
 * sequenceList:点击这名歌手歌曲的顺序列表
 * Mode:播放模式，如顺序，随机
 * currentIndex:当前播放的索引
 */
import {playMode} from 'common/js/config';

const state = {
    singer:{},
    playing:false,
    fullScreen:false,
    playlist:[],
    sequenceList:[],
    mode:playMode.sequence,
    currentIndex:-1
}

export default state;
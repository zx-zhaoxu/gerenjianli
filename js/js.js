/**
 * Created by ���� on 2017/6/19.
 */
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    onInit: function(swiper){ //Swiper2.x�ĳ�ʼ����onFirstInit
        swiperAnimateCache(swiper); //���ض���Ԫ��
        swiperAnimate(swiper); //��ʼ����ɿ�ʼ����
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //ÿ��slide�л�����ʱҲ���е�ǰslide����
    }
})
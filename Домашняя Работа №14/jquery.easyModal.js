(function ($){
    class Modal{
        constructor(element, options){
            this.default = {
                closeClass: 'close-modal',
                autoClose: false,
                autoCloseTime: 1000,
                opacity: 0.7,
                position: 'top',
                duration: 500
            }
            this.modal = element;
            this.options = $.extend(this.default, options);
            this.overlay = $('.overlay');
        }

        init(){
            this.showOverlay();
            this.showModal();
            this.events();
            this.autoCloseModal();
        }

        events(){
            this.overlay.on('click', (e) => this.closeModal());
            $(`.${this.options.closeClass}`).on('click', (e) => this.closeModal());
        }

        clearEvents(){
            this.overlay.off('click');
            $(`.${this.options.closeClass}`).off('click');
        }

        showOverlay(){
            if(!this.overlay.length){
                this.overlay = $('<div class="overlay"></div>');
            }
            this.overlay.css({
                'display':'block',
                'position':'fixed',
                'top':'0',
                'left':'0',
                'right':'0',
                'bottom':'0',
                'opacity':'0',
                'background-color':`rgba(0,0,0,${this.options.opacity})`,
                'z-index':'999'
            });
            this.modal.before(this.overlay);
        }

        showModal(){
            const halfWidth = this.modal.outerWidth() / 2;
            const halfHeight = this.modal.outerHeight() / 2;

            this.styles = {
                center:{
                    'display': 'block',
                    'position': 'fixed',
                    'top': '50%',
                    'left': '50%',
                    'z-index': '1000',
                    'opacity': '0',
                    'margin-top': `-${halfHeight}px`,
                    'margin-left': `-${halfWidth}px`
                },
                top:{
                    'display': 'block',
                    'position': 'fixed',
                    'top': '34%',
                    'left': '50%',
                    'z-index': '1000',
                    'opacity': '0',
                    'margin-top': `-${halfHeight}px`,
                    'margin-left': `-${halfWidth}px`
                },
                bottom:{
                    'display': 'block',
                    'position': 'fixed',
                    'top': '65%',
                    'left': '50%',
                    'bottom': '100px',
                    'z-index': '1000',
                    'opacity': '0',
                    'margin-top': `-${halfHeight}px`,
                    'margin-left': `-${halfWidth}px`
                }
            }

            this.overlay.animate({
                opacity: 1
            }, this.options.duration);

            this.modal.css(this.styles[this.options.position]).animate({
                opacity:1
            }, this.options.duration)
        }

        closeModal(){
            this.overlay.animate({
                opacity:1
            }, this.options.duration, () => {
                this.overlay.css({'display': 'none'});
            });

            this.modal.animate({
                opacity:1
            }, this.options.duration, () => {
                this.modal.css({'display': 'none'});
            });

            this.clearEvents();
        }

        autoCloseModal() {
            if (this.options.autoClose) {
                setTimeout(() => this.closeModal(this), this.options.autoCloseTime);
            }
        }

    }

    $.fn.easyModal = function (options) {
        new Modal(this, options).init();
    }

}(jQuery));




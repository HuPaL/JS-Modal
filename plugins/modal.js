function _createModal(options) {
    const modal = document.createElement('div');
    modal.classList.add('pmodal');
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title">Modal Title</span>
                    <span class="modal-close">&times;</span>
                </div>
                <div class="modal-body">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="modal-footer">
                    <button>Ok</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    `)
    document.body.appendChild(modal);
    return modal

}

$.modal = function(options) {
    const ANIMATION_SPEED = 300;
    const $modal = _createModal(options);
    let closing = false;
    return {
        open() {
            !closing && $modal.classList.add('open');
        },
        close() {
            closing = true;
            $modal.classList.remove('open');
            $modal.classList.add('close');
            setTimeout(() => {
                $modal.classList.remove('close');
                closing = false;
            }, ANIMATION_SPEED)
        },
        destroy() {}
    }
}
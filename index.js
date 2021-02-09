const fruits = [
    {}
]

const modal = $.modal({
    title: 'My Modal JS',
    closable: true,
    content: `<h4>Modal is working</h4>
    <p>Content</p>
    `,
    width: '400px',
    footerButtons: [{
            text: 'Ok',
            class: 'primary',
            handler() {
                console.log("Button primary clicked");
                modal.close()
            }
        },
        {
            text: 'Cancel',
            class: 'danger',
            handler() {
                console.log("Button danger clicked");
                modal.close()
            }
        },
    ]
});
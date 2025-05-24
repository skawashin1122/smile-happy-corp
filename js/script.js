// --- Cさん担当: お問い合わせフォーム入力チェック ---
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage'); // メッセージ表示用のpタグ
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // フォームのデフォルト送信をキャンセル
            // 入力値の取得 (trim()で前後の空白を除去)
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            // メッセージエリアを初期化
            formMessage.textContent = '';
            formMessage.className = 'form-message'; // 基本クラスに戻す
            // バリデーションチェック
            let errors = [];
            if (name === '') {
                errors.push('お名前を入力してください。');
            }
            if (email === '') {
                errors.push('メールアドレスを入力してください。');
            } else if (!email.includes('@') || !email.includes('.')) {
                // 簡単なメール形式チェック (より厳密には正規表現を使用)
                errors.push('有効なメールアドレスの形式で入力してください。');
            }
            if (message === '') {
                errors.push('お問い合わせ内容を入力してください。');
            }
            // エラーがあれば表示
            if (errors.length > 0) {
                formMessage.textContent = errors.join('\n'); // エラーメッセージを改行で連結
                formMessage.className = 'form-message error';
                return; //ここで処理を中断
            }
            // バリデーション成功 (実際にはここでサーバーにデータを送信する処理が入る)
            formMessage.textContent = 'お問い合わせありがとうございます。送信されました！ (このデモでは実際には送信されません)';
            formMessage.className = 'form-message success';
            contactForm.reset(); // フォームの内容をリセット
        });
    }
});
// --- Cさん担当: お問い合わせフォーム入力チェックここまで ---
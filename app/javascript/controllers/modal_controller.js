import { Controller } from "@hotwired/stimulus"

// bootstrapのmodalをimport
import { Modal } from "bootstrap" 

// Connects to data-controller="modal"
export default class extends Controller {
  // 'connect'はStimulusのライフサイクルコールバックの一つ
  // コントローラーがHTML要素にアタッチされたとき(=HTML要素が画面に表示されたとき)に実行
  connect() {
    // モーダル生成
    this.modal = new Modal(this.element)

    // モーダルを表示
    this.modal.show()
  }

  // アクション定義
  // 保存成功時にモーダルを閉じる
  close(event) {
    // event.detail.successは、レスポンスが成功ならtrueを返す
    // バリデーションエラー時はモーダルを閉じたくないので、成功時のみ閉じる
    if (event.detail.success) {
      // モーダルを閉じる
    }
    this.modal.hide()
  }
}

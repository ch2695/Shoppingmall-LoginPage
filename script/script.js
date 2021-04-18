$(function () {

	/* 아이디 중복체크 */
	$("#idChkBtn").click(function () {
		var inputUID = $("#uID").val().trim();
		var regIDList = ["test01", "guest01", "member01"];
		var idUseChk = true;

		$.each(regIDList, function (i, v) {
			if (inputUID == v) {
				idUseChk = false;
			}
		});

		var msg = "";
		if (idUseChk) {
			msg = "사용가능한 아이디";
			alert(msg);
			$("#uPW").focus();
		} else {
			msg = "이미 사용중인 아이디";
			alert(msg);
			$("#uID").focus().val("");
		}

	});
	/* 아이디 중복체크 */


	/* 비밀번호 보기 */
	$("#pwchkBtn").click(function(){
		var chkTF = $(this).prop("checked");
		if(chkTF) {
			$("input.uPW").attr("type", "text");
		}else {
			$("input.uPW").attr("type", "password");
		}
	});
	/* 비밀번호 보기 */


	/*출생년도 입력하기 select option 시작 */
	var now = new Date();
	var startYear = now.getFullYear(); // 현재 년도
	var endYear = 1950;

	var txtYear = "<option>년도</option>";
	for (var i = startYear; i >= endYear; i--) {
		txtYear += "<option>" + i + "</option>";
	}
	$("#birthYear").html(txtYear);
	/* 출생년도 입력하기 select option 끝 */


	/* 체크박스 동기화 시작 */

	/* 전체동의 체크 => 하위 체크박스 체크여부 결정 */
	$("#wholeChk").click(function () {
		var chkYN = $(this).prop("checked");
		if (chkYN) {
			$(".subChk").prop("checked", true);
		} else {
			$(".subChk").prop("checked", false);
		}
	});
	/* 전체동의 체크 => 하위 체크박스 체크여부 결정 */

	/* 하위 체크박스 체크 => 전체동의 체크여부 결정 */
	$(".subChk").click(function () {
		var chk1 = $("#chk1").prop("checked");
		var chk2 = $("#chk2").prop("checked");
		var chk3 = $("#chk3").prop("checked");
		var chk4 = $("#chk4").prop("checked");

		if (chk1 && chk2 && chk3 && chk4) {
			$("#wholeChk").prop("checked", true);
		} else {
			$("#wholeChk").prop("checked", false);
		}
	});
	/* 하위 체크박스 체크 => 전체동의 체크여부 결정 */

	/* 체크박스 동기화 끝 */


	/* 비밀번호 일관성 */
	$("#consentBtn").click(function(){
		alert("OK!!");
	});
	/* 비밀번호 일관성 */

});




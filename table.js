function studentAdd() {
    if ($("#DataTable tbody").length == 0) {
    $("#DataTable").append("<tbody></tbody>");
    }

    $("#DataTable tbody").append("<tr>" + 
        "<td>105011810001</td>" +
        "<td>John Doe</td>" +
        "<td>Male</td>" +
        "<td>FIK</td>" +
        "<td>Sistem Informasi</td>" +
        "</tr>");

    $("#DataTable tbody").append("<tr>" + 
        "<td>10500110001</td>" +
        "<td>Jack Richer</td>" +
        "<td>Male</td>" +
        "<td>FEB</td>" +
        "<td>Manajemen</td>" +
        "</tr>");

    $("#DataTable tbody").append("<tr>" + 
        "<td>105001810081</td>" +
        "<td>Mary Heather</td>" +
        "<td>Female</td>" +
        "<td>FIK</td>" +
        "<td>Informatika</td>" +
        "</tr>");

    $(document).ready(function () {
        studentAdd();
        });
}

function AddStudent() {
    if ($("#studentNIM").val() != null && $("#studentNIM").val() != '') {
        StudentAddToTable();

        ClearForm();

        $("#atudentNIM").focus();
    }
}

function ClearForm() {
    $("#studentNIM").val();
    $("#fullname").val();
    $("#gender").val();
    $("#faculty").val();
    $("#programofstudy").val();
}

function StudentAddToTable() {
    if ($("#DataTable tbody").length == 0) {
        $("#DataTable").append("<tbody></tbody>");
    }

    $("#DataTable tbody").append("<tr>" +
        "<td>" + $("#studentNIM").val() + "</td>" +
        "<td>" + $("#fullname").val() + "</td>" +
        "<td>" + $("#gender").val() + "</td>" +
        "<td>" + $("#faculty").val() + "</td>" +
        "<td>" + $("#programofstudy").val() + "</td>" +
        "<td>" +
        "<button type='button' class='btn btn-primary' onkeyup='studentDelete(this)'>" +
        "<span class='glyphicon glyphicon-remove'/>" +
        "</button>" +
        "</tr>");
}

function studentDelete(ctl) {
    $(ctl).parents("tr").remove();
}









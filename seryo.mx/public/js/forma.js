
<!-- Form Redirect -->

<!-- Hidden iframe -->
<iframe name="secret-frame" width="0" height="0" border="0" style="display: none;"></iframe>

<!-- Script to redirect to a custom page -->
<script>
// replace "ss-submit" with the ID of your submit button
document.getElementById("ss-submit").addEventListener("click", function(){
  // adds a delay because the results page loads before the form has a chance to submit
  setTimeout(function() {
    // replace the url in quotes below to where you want to the user to be redirected to
    window.location = "http://www.google.com";
  }, 1000);
});
</script>
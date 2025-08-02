 const imageInput = document.getElementById('imageInput');
    const preview = document.getElementById('imagePreview');

    imageInput.addEventListener('change', () => {
      const file = imageInput.files[0];
      if (!file) {
        preview.style.display = 'none';
        return;
      }
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file');
        imageInput.value = '';
        preview.style.display = 'none';
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert('Image too large (max 2MB)');
        imageInput.value = '';
        preview.style.display = 'none';
        return;
      }
      const reader = new FileReader();
      reader.onload = e => {
        preview.src = e.target.result;
        preview.style.display = 'block';
      };
      reader.readAsDataURL(file);
    });
document.querySelector('.generate-btn').addEventListener('click', function() {
            this.innerHTML = 'Generating...';
            
            setTimeout(() => {
                this.innerHTML = 'Generate My Idea';
                alert('Idea generated! Check the sample idea card below.');
            }, 1500);
        });
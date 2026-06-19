import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {


  formData = signal({ name: '', email: '', subject: '', message: '' });
  isSubmitting = signal<boolean>(false);
  submitSuccess = signal<boolean>(false);

  onInputChange(field: string, event: Event) {
    const value = (event.target as HTMLInputElement | HTMLTextAreaElement).value;
    this.formData.update(current => ({ ...current, [field]: value }));
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.isSubmitting.set(true);


    setTimeout(() => {
      this.isSubmitting.set(false);
      this.submitSuccess.set(true);
      
      this.formData.set({ name: '', email: '', subject: '', message: '' });
    }, 1800);
  }

  resetForm() {
    this.submitSuccess.set(false);
  }
}

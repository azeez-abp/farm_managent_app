<?php

namespace App\Http\Requests\V1\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class Register extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {

        $this->all()['employee_email'] =   $this->all()['email'];
        $data_key  = ['employee_name', 'employee_email',  'employee_password', 'employee_password_confirmation', 'employee_mobile', 'employee_address', 'isJson'];
        unset($this->all()['email']);
        $data_value   = array_values($this->all());
        $data  = array_combine($data_key, $data_value);
        $this->replace($data);

        return [
            'employee_email' => ['required', 'email', 'max:225', 'unique:employees'],
            'employee_password' => ['required', 'confirmed', Password::default()]
            //
        ];
    }
}

import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
    <div style={{ backgroundColor: '#1f2937', padding: '24px', borderRadius: '8px' }}>
      <h1 style={{ color: '#ffffff', fontSize: '24px', marginBottom: '16px' }}>
        New Portfolio Contact
      </h1>
      
      <div style={{ backgroundColor: '#374151', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <div style={{ marginBottom: '12px' }}>
          <strong style={{ color: '#60a5fa' }}>From:</strong>
          <span style={{ color: '#ffffff', marginLeft: '8px' }}>{name}</span>
        </div>
        
        <div style={{ marginBottom: '12px' }}>
          <strong style={{ color: '#60a5fa' }}>Email:</strong>
          <span style={{ color: '#ffffff', marginLeft: '8px' }}>{email}</span>
        </div>
        
        <div style={{ marginBottom: '12px' }}>
          <strong style={{ color: '#60a5fa' }}>Message:</strong>
        </div>
        
        <div style={{ 
          backgroundColor: '#1f2937', 
          padding: '16px', 
          borderRadius: '6px', 
          marginTop: '8px',
          borderLeft: '4px solid #60a5fa'
        }}>
          <p style={{ 
            color: '#e5e7eb', 
            lineHeight: '1.6', 
            margin: '0',
            whiteSpace: 'pre-wrap'
          }}>
            {message}
          </p>
        </div>
      </div>
      
      <div style={{ 
        backgroundColor: '#065f46', 
        padding: '16px', 
        borderRadius: '6px',
        borderLeft: '4px solid #10b981'
      }}>
        <p style={{ color: '#d1fae5', fontSize: '14px', margin: '0' }}>
          💡 <strong>Quick Tip:</strong> You can reply directly to this email to respond to {name}.
        </p>
      </div>
      
      <hr style={{ border: 'none', borderTop: '1px solid #4b5563', margin: '20px 0' }} />
      
      <p style={{ color: '#9ca3af', fontSize: '12px', textAlign: 'center', margin: '0' }}>
        This message was sent from your portfolio contact form.
      </p>
    </div>
  </div>
);
